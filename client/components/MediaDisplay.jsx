import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Wrapper = styled.section`
box-sizing: border-box;
width: 100vw;
background: black;
display: flex;
`;

function MediaDisplay() {
  return (
    <Wrapper>
      <section className="image-section">
        <div className="image-cover">
          {/* <img src={this.props.images[0]} alt="an image of something" /> */}
          <img src="https://picsum.photos/200/300" />
        </div>
        <div className="image-cover">
          {/* <img src={this.props.images[1]} alt="an image of something" /> */}
          <img src="https://picsum.photos/200/300" />
        </div>
        <div className="vertical-stack-images">
          <div className="image-cover-stacked">
            {/* <img src={this.props.images[2]} alt="an image of something" /> */}
            <img src="https://picsum.photos/200/300" />
          </div>
          <div className="image-cover-stacked">
            {/* <img src={this.props.images[3]} alt="an image of something" /> */}
            <img src="https://picsum.photos/200/300" />
          </div>
        </div>
        <div className="image-cover-last">
          {/* <img src={this.props.images[4]} alt="an image of something" /> */}
          <img src="https://picsum.photos/200/300" />
        </div>
        <div className="share-save">
          <div className="share">
            <button type="button" className="save-btn">
              <FontAwesomeIcon className="save-icon" icon={faShareSquare} size="md" />
              <span className="share-text">Share</span>
            </button>
          </div>
          <div className="save">
            <button type="button" className="share-btn">
              <FontAwesomeIcon className="share-icon" icon={faHeart} size="md" />
              <span className="save-text">Save</span>
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default MediaDisplay;
