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
      <div className={className + ' h-64 overflow-auto p-2 rounded border-2 border-gray-500 shadow-inner'}>
          {
              draftedPosts.map(post =>
                  <Tile post={post} canEdit={true} key={post.id}/>
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