test('Eric test', async () => {
    const response = await fetch('http://localhost:3000/eric');
    const name = await response.text();
    expect(name).toBe("eric");
  });