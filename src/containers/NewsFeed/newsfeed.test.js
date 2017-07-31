import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import stories from './stories.fixture'; // webpack 2 bundles json-loader
import NewsFeed from './index.js';

describe('NewsFeed', () => {
  // let stories = mockStories();
  let firstStory = stories[0];
  
  it('renders properly', () => {
    const newsfeed = mount(<NewsFeed items={stories} />);
    const articles = newsfeed.find('.news-article')
    expect(newsfeed).toBeDefined();
    expect(articles.length).toEqual(10);
  })
})

