import { Client, Databases, ID } from 'appwrite'
VITE_APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT = "681a9a0d003378a2f9b7"
VITE_APPWRITE_DATABASE = "681a9bbb00220d33012c"
VITE_APPWRITE_COLLECTION = "681a9bdb0032d44833cc"

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("681a9a0d003378a2f9b7");

const databases = new Databases(client);


async function getVisitorInfo() {
  const res = await fetch('https://ipapi.co/json/');
  const data = await res.json();

  return {
    ip: data.ip,
    address: `${data.city}, ${data.region}, ${data.country_name}`,
  };
}

export const logTraffic = async function logTraffic() {
  const { ip, address } = await getVisitorInfo();
  const access_time = new Date().toISOString();

  await databases.createDocument(
    "681a9bbb00220d33012c",
    "681a9bdb0032d44833cc",
    ID.unique(),
    {
      ip,
      address,
      access_time,
    }
  );
};
