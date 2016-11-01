class AddAuthorToProject < ActiveRecord::Migration
  def change
    add_column :projects, :author, :string
  end
end
