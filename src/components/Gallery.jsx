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
    q: '',
  };

  componentDidMount() {
    this.fetchGallery();
  }
  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page || prevState.q !== this.state.q) {
      this.fetchGallery();
    }
    return;
  }

  fetchGallery = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await getGallery({
        params: {
          page: this.state.page,
          q: this.state.q,
        },
      });
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...res.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeQuery = q => {
    this.setState({ q, page: 1, gallery: [] });
  };
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
        <Searchbar onSubmit={this.handleChangeQuery} />
        <div>
          <ImageGallery gallery={gallery} />
        </div>
        <div>
          <button
            onClick={this.handleLoadMore}
            type="button"
            className={css.button}
          >
            Load More
          </button>
        </div>
      </>
    );
  }
}
