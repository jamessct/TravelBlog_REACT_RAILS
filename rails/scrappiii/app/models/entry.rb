class Entry < ActiveRecord::Base
  has_many(:comment)
  has_many(:photo)
  belongs_to(:project)
end
