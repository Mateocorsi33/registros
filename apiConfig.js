let apiUrl = '';

if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://localhost:5000/api'; // URL para desarrollo
} else {
  apiUrl = 'https://registros-beta.vercel.app'; // URL para producción
}

export default apiUrl;
