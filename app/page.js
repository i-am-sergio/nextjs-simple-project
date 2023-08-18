async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/"); // por cambiar a reqres.in
  const data = await res.json();
  console.log(data);
}

async function HomePage() {
  await fetchUsers();
  return <div>HomePage</div>;
}

export default HomePage;