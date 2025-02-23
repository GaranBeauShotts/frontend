document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const inputData = document.getElementById('inputData').value;
    
    const response = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: inputData })
    });

    const result = await response.json();
    document.getElementById('response').innerText = `Response: ${result.message}`;
});