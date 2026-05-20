const btn = document.getElementById("fetchBtn");
const container = document.getElementById("tablesContainer");

// Utility to render table
function renderTable(title, data) {
  const table = document.createElement("table");

  table.innerHTML = `
    <tr><th colspan="2">${title}</th></tr>
    <tr><th>ID</th><th>Title</th></tr>
  `;

  data.slice(0, 5).forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title || item.name || item.todo}</td>
    `;

    table.appendChild(row);
  });

  container.appendChild(table);
}

// Promise API 1
function PromiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then(data => {
          renderTable("Posts API", data.posts);
          resolve();
        });
    }, 1000);
  });
}

// Promise API 2
function PromiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
          renderTable("Products API", data.products);
          resolve();
        });
    }, 2000);
  });
}

// Promise API 3
function PromiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/todos")
        .then(res => res.json())
        .then(data => {
          renderTable("Todos API", data.todos);
          resolve();
        });
    }, 3000);
  });
}

// Chain execution
btn.addEventListener("click", () => {
  container.innerHTML = "";

  PromiseAPI1()
    .then(() => PromiseAPI2())
    .then(() => PromiseAPI3());
});