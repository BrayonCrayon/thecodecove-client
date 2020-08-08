import React from 'react';
import {IStoreState} from "../../../store/StoreState";
import {connect} from "react-redux";
import Tile from "../../Blog/Posts/Tile";
import {Post} from "../../../dtos/Post";

interface IDraftedPostsProps {
    draftedPosts: Array<Post>,
    className: string,
}


const DraftedPosts = ({draftedPosts = [], className = ''} : IDraftedPostsProps) => {
    return (
      <div className={className + ' drafted-posts-list'}>
          {
              draftedPosts.map(post =>
                  <Tile post={post} canEdit={true} key={post.id} className="my-6"/>
              )
          }
      </div>
    );
}

function mapStateToProps(state: IStoreState) {
    return {
        draftedPosts: state.blogState.draftedPosts,
    }
}

export default connect(mapStateToProps)(DraftedPosts);