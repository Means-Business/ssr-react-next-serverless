import axios from 'axios';
import React, { Component } from 'react';
import Default from '../../layouts/default';
const meta = { title: 'Dogs title', description: 'Dogs description' };

class DogsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dogs: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }
  async componentDidMount() {
    await this.fetchData();
  }
  async fetchData() {
    this.setState({ loading: true });
    const { data } = await axios.get(
      'https://api.thedogapi.com/v1/images/search?size=thumb&limit=10'
    );
    this.setState({ dogs: data, loading: false });
  }
  renderDogList() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {this.state.dogs.map((dog, key) => (
              <div key={key} className="p-4 lg:w-1/3">
                <div className="bg-gray-100 bg-opacity-75 px-4 pt-4 pb-24 rounded-lg overflow-hidden text-center relative">
                  <div className="flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={dog.url}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        Alper Kamu
                      </h2>
                      <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    </div>
                  </div>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 dark:text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="p-4 lg:w-1/4 md:w-1/2">
              {this.state.dogs.map((dog, key) => (
                <div
                  key={key}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={dog.url}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Alper Kamu
                    </h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    );
  }
  render() {
    return (
      <Default meta={meta}>
        <div>{this.renderDogList()}</div>
      </Default>
    );
  }
}

export default DogsPage;

{
  /* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            Raclette Blueberry Nextious Level
          </h1>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <a className="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */
}
