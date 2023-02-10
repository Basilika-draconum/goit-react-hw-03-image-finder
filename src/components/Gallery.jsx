import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getGallery } from '../services/galleryService';
// import { ColorRing } from './Loader/Loader';
import { ColorRing } from 'react-loader-spinner';

export default class Gallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    getGallery()
      .then(response => {
        this.setState({ gallery: response.data.hits, isLoading: false });
      })
      .catch(console.log);
  }
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
          {/* <Loader /> */}
        </div>
        <div>
          <button></button>
        </div>
      </>
    );
  }
}
