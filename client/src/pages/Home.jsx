import React, { useState } from 'react';

function Home() {
  const [url, setUrl] = useState('');
  const [media, setMedia] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    const url = import.meta.env.VITE_API_URL;

    try {
      setLoading(true)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (response.ok) {
        setMedia(data);
        setError('');
        setLoading(false)
      } else {
        setError(data.message);
        setLoading(false)
        setMedia(null);
      }
    } catch (err) {
      setError('Failed to fetch data');
      setLoading(false)
    }
  };

  return (
    <div className="text-center p-6 mt-10">
      <h1 className="text-3xl text-slate-500 font-bold mb-10">Instagram Video Downloader</h1>
      <input
        type="text"
        value={url}
        className="px-4 py-3 border rounded-l-lg w-1/3 mb-4 outline-none"
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Instagram URL"
      />
      <button className="gradient border text-white px-6 py-3 rounded-r-lg" onClick={handleDownload}>
        {loading ? 'Loading...' : 'Download'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {media && (
        <div className="flex justify-center flex-col items-center">
          {media.type === 'video' && (
            <video className="w-full max-w-[400px]" controls src={media.download_url}></video>
          )}
          <a className="dark border text-white px-6 py-2 rounded-lg mt-4" target="_blank" href={media.download_url} download>
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;
