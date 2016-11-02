class EntriesController < ApplicationController
  def index
    entries = Entry.all
    render :json => entries.as_json(include: [:photo, :comment]) 
  end

  def create
    entry = Entry.create(entry_params)
    render :json => entry
  end

  def update
    entry = Entry.find(params[:id])
    if entry.update_attributes(project_params)
      render :json => entry
    else
      render :json => {status: :update_failed}
    end
  end

  def destroy
    entry = Entry.find(params[:id])
    if entry.destroy!
      render :json => {status: :success}
    else
      render :json => {status: :delete_failed}
    end
  end

  private
  def entry_params
    params.require(:entry).permit([:title, :project_id, :body, :tagline, :mainPhoto])
  end
end

[:title, :project, :body, :tagline, :mainPhoto]