function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const atthedate = document.getElementById('atthedate').value;
    const result = document.getElementById('result');
    const loader = document.getElementById('loader');
    
    // Show loader
    loader.style.display = 'block';
    result.innerText = '';

    setTimeout(() => {
        const birthDate = new Date(birthdate);
        const attheDate = new Date(atthedate);

        let year = attheDate.getFullYear() - birthDate.getFullYear();
        let month = attheDate.getMonth() - birthDate.getMonth();
        let date = attheDate.getDate() - birthDate.getDate();

        // Adjust month and year if necessary
        if (month < 0 || (month === 0 && date < 0)) {
            year--;
            month += 12;
        }

        // Adjust date if necessary
        if (date < 0) {
            const previousMonth = new Date(attheDate.getFullYear(), attheDate.getMonth() - 1, 0);
            date += previousMonth.getDate();
            month--;
        }

        // Hide loader and display result
        loader.style.display = 'none';
        result.innerHTML = `You are  <span style="font-weight: bold; color: red;">${year} years</span>,  <span style="font-weight: bold; color: blue;">${month} months</span>,  and <span style="font-weight: bold; color: green;">${date} days</span> old.`;
    }, 2000); // Simulate a delay for the loader
}
