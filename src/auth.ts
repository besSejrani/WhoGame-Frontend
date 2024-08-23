// Authentication
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// AWS
import { getSecret } from "@AWS/SecretManager";

// Error
import { NextAuthError } from "@Class/Error/NextAuthError";

// ========================================================================================================

const nextAuthConfig = NextAuth({
  // ===============================================================
  // Providers
  // ===============================================================
  providers: [
    CredentialsProvider({
      //============================
      //  Authorization
      //============================
      async authorize(credentials) {
        const { key: adminUser } = await getSecret({
          secretName: "WHO_IS_RAG_ADMIN_USER",
        });

        const { key: adminPassword } = await getSecret({
          secretName: "WHO_IS_RAG_ADMIN_PASSWORD",
        });

        if (
          credentials.email === adminUser &&
          credentials.password === adminPassword
        ) {
          return {
            id: "1",
            email: adminUser,
            role: "admin",
            name: "Admin User",
          };
        }

        throw new NextAuthError("Invalid credentials");
      },
    }),
  ],

  // ===============================================================
  // Callbacks
  // ===============================================================
  callbacks: {
    //============================
    //  Sign in
    //============================
    async signIn({ account }) {
      if (account?.provider === "credentials") return true;

      return true;
    },

    //============================
    //  JWT
    //============================
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },

    //============================
    //  Session
    //============================
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.role = token.role;
      session.user.name = token.name;

      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 1,
  },
  pages: {
    signIn: "/signin",
  },
  trustHost: true,
  secret: process.env.OPEN_SSL_RANDOM_AUTH_SECRET,
  debug: process.env.NEXT_PUBLIC_APP_ENV === "development",
});

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = nextAuthConfig;
