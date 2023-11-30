import axios from 'axios';

async function AuthRefresh(authRequestData) {
  if (!authRequestData || !authRequestData.address) {
    return;
  }

  try {
    let token = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refreshAccess`,
      authRequestData
    );

    return token.data;
  } catch (error) {
    console.error(error);
  }
}

export default AuthRefresh;
