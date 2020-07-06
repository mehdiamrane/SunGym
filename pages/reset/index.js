import redirectTo from 'helpers/redirectTo';

export default function ResetIndex() {
  return <p>Reset Page</p>;
}

// EXECUTES BEFORE PAGE LOADS
ResetIndex.getInitialProps = async (ctx) => {
  redirectTo(ctx, '/');
  // Must return an object
  return { ping: 'pong' };
};
