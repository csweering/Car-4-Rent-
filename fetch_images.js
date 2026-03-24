import https from 'https';
https.get('https://car4rent.fr/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const urls = data.match(/https:\/\/car4rent\.fr\/wp-content\/uploads\/[^"']+\.(jpg|jpeg|png)/gi);
    if (urls) {
      console.log([...new Set(urls)].join('\n'));
    }
  });
});
