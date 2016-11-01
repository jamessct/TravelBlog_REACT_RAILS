class AddEntriesToPhoto < ActiveRecord::Migration
  def change
    add_reference :photos, :entry, index: true, foreign_key: true
  end
end
