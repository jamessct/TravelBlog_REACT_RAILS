class AddBodyToEntries < ActiveRecord::Migration
  def change
    add_column :entries, :body, :string
  end
end
