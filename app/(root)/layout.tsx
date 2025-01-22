export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            SIDEBARS
            {children}
        </main>
    );
}
