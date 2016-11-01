class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :link
      t.string :description

      t.timestamps null: false
    end
  end
end
