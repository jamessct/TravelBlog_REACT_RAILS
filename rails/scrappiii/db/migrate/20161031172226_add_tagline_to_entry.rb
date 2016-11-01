class AddTaglineToEntry < ActiveRecord::Migration
  def change
    add_column :entries, :tagline, :string
  end
end
