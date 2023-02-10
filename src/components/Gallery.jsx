import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getGallery } from '../services/galleryService';
import css from './Button/button.module.scss';
// import { ColorRing } from './Loader/Loader';
import { ColorRing } from 'react-loader-spinner';

export default class Gallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    getGallery({ params: { page: this.state.page } })
      .then(response => {
        this.setState({ gallery: response.data.hits });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  componentDidUpdate(_, prevState) {
    if (prevState.page === this.state.page) {
      return;
    }
    this.setState({ isLoading: true });
    getGallery({ params: { page: this.state.page } })
      .then(response => {
        this.setState(prevState => ({
          ...prevState.gallery,
          ...response.data.hits,
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { gallery, isLoading } = this.state;
    if (isLoading) {
      return <ColorRing />;
    }

    return (
      <>
        <Searchbar />
        <div>
          <ImageGallery gallery={gallery} />
        </div>
        <div>
          <button
            onClick={this.handleLoadMore}
            type="button"
            className={css.button}
            disabled={true}
          >
            Load More
          </button>
        </div>
      </>
    );
  }
}
