import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { loginUserWithCredentials } from '@/actions/user/loginUser';
import { createUserWithProvider } from '@/actions/user/createUser';

export const { handlers, signIn, signOut, auth } = NextAuth({
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/auth/login',
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (!credentials.email || !credentials.password) {
                    throw new Error('Email and password are required');
                }

                let res = await loginUserWithCredentials(
                    credentials.email,
                    credentials.password
                );
                if (!res.success) {
                    throw new Error(res.message);
                }

                return res.user;
            },
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === 'google') {
                const userDB = createUserWithProvider({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    provider: 'Google',
                });
                user.id = profile.sub;
            } else if (account.provider === 'github') {
                const userDB = createUserWithProvider({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    provider: 'Github',
                });
                user.id = profile.id;
            }
            return true;
        },
        async session({ session, token }) {
            session.user.id = token.sub;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
    session: { strategy: 'jwt' },
});
