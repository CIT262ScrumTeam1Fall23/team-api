test('Should return Bamidele', async () => {
    const response = await fetch('http://localhost:3000/bam');
    const name = await response.text();
    expect(name).toBe("Bamidele");
  });
