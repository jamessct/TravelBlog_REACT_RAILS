class RemoveAuthorFromEntry < ActiveRecord::Migration
  def change
    remove_column :entries, :author, :string
  end
end
