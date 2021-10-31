import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

interface BadCredentialsPageProps {
	ssrString: string;
	sspString: string;
}

const BadCredentialsPage: NextPage<BadCredentialsPageProps> = ({ ssrString, sspString }) => {
	console.log(
		'🚀 ~ file: bad-credentials.tsx ~ line 12 ~ ssrString, sspString',
		ssrString,
		sspString
	);
	return <div>Sorry, auth failed.</div>;
};

export function getStaticProps() {
	const sspString = 'i m from server';
	return { props: { sspString } };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const sstString = 'im ssr string';
	return { props: { sstString } };
};

export default BadCredentialsPage;
