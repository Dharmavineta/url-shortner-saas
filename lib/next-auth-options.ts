import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prismaDB from "./db";
import bcrypt from "bcryptjs";
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: { id: string } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const user = await prismaDB.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!user) {
            return null;
          }
          const isPassword = await bcrypt.compare(
            credentials.password,
            user.password!
          );

          if (!isPassword) {
            return null;
          }
          return user;
        } catch (error: any) {
          console.log(error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        }
        if (account?.provider === "google") {
          const isUser = await prismaDB.user.findUnique({
            where: {
              email: user.email!,
            },
          });
          if (isUser) {
            return true;
          }
          const newUser = await prismaDB.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image,
            },
          });
          return true;
        }
      } catch (error: any) {
        console.log(error);
      }
      return true;
    },

    async jwt({ token, user }) {
      const Dbuser = await prismaDB.user.findUnique({
        where: {
          email: token.email!,
        },
      });

      if (user) {
        token.email = user.email;
        token.id = Dbuser?.id!;
        token.name = user.name;
        token.picture = Dbuser?.image || user.image;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.image = token.picture;
        session.user.name = token.name;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
