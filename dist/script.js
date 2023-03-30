"use strict";
async function displayUserData() {
    const response = await fetch('https://dummyjson.com/products');
    //  const response = await getNewsApiData('GET', 'https://reqres.in/api/users');
    let jsonData = await response.json();
    let data = jsonData.products;
    console.log("response data", data);
    const table = document.createElement('table');
    // Create table header row
    const headerRow = document.createElement('tr');
    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'title';
    headerRow.appendChild(titleHeader);
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'description';
    headerRow.appendChild(descriptionHeader);
    const brand_Header = document.createElement('th');
    brand_Header.textContent = 'brand';
    headerRow.appendChild(brand_Header);
    const images_Header = document.createElement('th');
    images_Header.textContent = 'Images';
    headerRow.appendChild(images_Header);
    table.appendChild(headerRow);
    // Create table rows and data cells
    for (const user of data) {
        const row = document.createElement('tr');
        const pageCell = document.createElement('td');
        pageCell.textContent = user.title;
        row.appendChild(pageCell);
        const per_pageCell = document.createElement('td');
        per_pageCell.textContent = user.description;
        row.appendChild(per_pageCell);
        const total_pagesCell = document.createElement('td');
        total_pagesCell.textContent = user.brand;
        row.appendChild(total_pagesCell);
        console.log("user.images[0]", user.images[0]);
        const image_pagesCell = document.createElement('td');
        image_pagesCell.innerHTML = "<img style='width: 100px; height: 100px' src=" + user.images[0] + ">";
        row.appendChild(image_pagesCell);
        table.appendChild(row);
    }
    // Add the table to the page
    const container = document.getElementById('user-table-container');
    container.appendChild(table);
}
const dapi = document.getElementById("dapi");
dapi.addEventListener("click", function () {
    displayUserData();
});
//# sourceMappingURL=script.js.map