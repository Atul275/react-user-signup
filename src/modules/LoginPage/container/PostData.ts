import 'src/app/client/api';

export function PostData(type: any, userData: any) {
  const api: string = 'https://http://192.168.31.129/payroll/';

  return new Promise(
    (resolve, reject) => {
      fetch(api + type, {
        method: 'POST',
        body: JSON.stringify(userData)
      })
        .then((response) => response.json()).then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    }
  );
}
