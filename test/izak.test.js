test('Izak test', async () => {
    const response = await fetch('http://localhost:3000/izak');
    const name = await response.text();
    expect(name).toBe("Izak");
  });