class AddMainPhotoToEntry < ActiveRecord::Migration
  def change
    add_column :entries, :mainPhoto, :string
  end
end
