const OAUTH2_CLIENT_CREDENTIALS =
  'https://i1.test-services.nykredit.it/security/oauth2/token?grant_type=client_credentials';

export const requestOAuth2Token = (): Promise<string> => {
  const token = localStorage.getItem('authentification');
  let authentification: string | null = null;
  if (token) {
    authentification = JSON.parse(token);
  }

  if (authentification === null) {
    const headers = new Headers();
    headers.append('Authorization', 'Basic dGVzdC1jbGllbnRpZDpwYXNzd29yZA==');

    return fetch(`${OAUTH2_CLIENT_CREDENTIALS}`, {
      method: 'post',
      headers: headers
    }).then(response => response.json());
  } else {
    return Promise.resolve(authentification);
  }
};
