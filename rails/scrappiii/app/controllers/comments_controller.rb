class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render :json => comments.as_json() 
  end

  def create
    comment = Comment.create(comment_params)
    render :json => comment
  end

  def update
    comment =  Comment.find(params[:id])
    if comment.update_attributes(comment_params)
      render :json => comment
    else
      render :json => {status: :update_failed}
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.destroy!
      render :json => comment
    else
      render :json => {status: :update_failed}
    end
  end

  private
  def comment_params
    params.require(:comment).permit([:comment, :author, :entry_id])
  end
end