import { Component } from 'react';
import css from './searchbar.module.scss';

export class Searchbar extends Component {
  state = {
    q: '',
  };

  handleChangeQuery = e => {
    this.setState({ q: e.target.value });
  };
  render() {
    const { q } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={q}
            onChange={this.handleChangeQuery}
          />
        </form>
      </header>
    );
  }
}
