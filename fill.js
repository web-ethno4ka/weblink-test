$(window).load(() => {
  // You need to fill all forms by corresponding fields from global "data" object
  console.log(data);

  const table = document.querySelector('.MuiTableBody-root');

  const [
    firstName,
    email,
    primaryPhone,
    secondaryPhone,
    businessDescription,
  ] = document.getElementsByTagName('input');
  const labels = document.querySelectorAll('label');

  $('#btnFill').click(() => {
    alert('No filling introduced yet');
    console.log(data);
    const rows = data.workers.map(toRow).forEach((row) => table.appendChild(row));

    firstName.setAttribute('value', data.name);
    email.setAttribute('value', data.email);
    primaryPhone.setAttribute('value', data.firstPhone);
    secondaryPhone.setAttribute('value', data.secondaryPhone);
    businessDescription.setAttribute('value', data.desc);
    labels.forEach((label) =>
      label.classList.add(
        'MuiFormLabel-root',
        'MuiInputLabel-root',
        'MuiInputLabel-formControl',
        'MuiInputLabel-animated',
        'MuiInputLabel-shrink',
        'Mui-focused',
      ),
    );
  });
});

function toRow({ firstName, dob, job }) {
  const tableRow = document.createElement('tr');
  tableRow.classList.add('MuiTableRow-root');

  const tableHeading = document.createElement('th');
  tableHeading.classList.add('MuiTableCell-root', 'MuiTableCell-body', 'MuiTableCell-sizeSmall');
  tableHeading.setAttribute('role', 'cell');
  tableHeading.setAttribute('scope', 'row');
  tableHeading.textContent = firstName;

  const tableDataDob = document.createElement('td');
  tableDataDob.classList.add(
    'MuiTableCell-root',
    'MuiTableCell-body',
    'MuiTableCell-sizeSmall',
    'MuiTableCell-alignRight',
  );
  tableDataDob.textContent = dob;

  const tableDataJob = document.createElement('td');
  tableDataJob.classList.add(
    'MuiTableCell-root',
    'MuiTableCell-body',
    'MuiTableCell-sizeSmall',
    'MuiTableCell-alignRight',
  );
  tableDataJob.textContent = job;

  const tableData = document.createElement('td');
  tableData.classList.add(
    'MuiTableCell-root',
    'MuiTableCell-body',
    'MuiTableCell-sizeSmall',
    'MuiTableCell-alignRight',
  );
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('MuiBox-root', 'jss25');

  const svgContainer = document.createElement('svg');
  svgContainer.classList.add('MuiSvgIcon-root', 'jss3');
  svgContainer.setAttribute('focusable', 'false');
  svgContainer.setAttribute('viewBox', '0 0 24 24');
  svgContainer.setAttribute('aria-hidden', 'true');
  const svgIcon = `<svg class="MuiSvgIcon-root jss3" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path
    d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>`;
  btnContainer.innerHTML = svgIcon;

  tableData.appendChild(btnContainer);
  tableRow.appendChild(tableHeading);
  tableRow.appendChild(tableDataDob);
  tableRow.appendChild(tableDataJob);
  tableRow.appendChild(tableData);
  return tableRow;
}
