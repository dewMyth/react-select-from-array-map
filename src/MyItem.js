import React, { Component } from 'react'

const items = [1, 2, 3, 4, 5];

export default class MyItem extends Component {
    renderContent = e => {
        const { itemId, renderContent } = this.props;
        renderContent(itemId);
      };
    
      deleteNotebook = e => {
        const { itemId, deleteNotebook } = this.props;
        deleteNotebook(itemId);
      };
    
      render() {
        const { isActive } = this.props;
        const groupItemClass = `list-group-item ${isActive && "active"}`;
        return (
          <div className="list-group">
            <a href="#" className={groupItemClass} onClick={this.renderContent}>
              {this.props.title}
              <button
                className="pull-right btn btn-xs btn-danger test"
                type="button"
                onClick={this.deleteNotebook}
              >
                <strong>Hello</strong>
              </button>
            </a>
          </div>
        );
      }
}
