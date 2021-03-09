import Head from 'next/head';
const Meta = ({ props = { title, description } }) => {
  return (
    <div>
      <Head>
        <title>{props.title || 'Next.js Test Title'}</title>
        <meta
          name="description"
          content={props.description || 'Next.js Test Description'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
      </Head>
    </div>
  );
};

export default Meta;
