import '../styles/index.scss';
import './modules/movies/data';
import './modules/movies/movie.service';
if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}
