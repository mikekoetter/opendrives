class Icon < ActiveRecord::Base
	has_and_belongs_to_many :jobs
	has_attached_file :image, styles: {
    thumb: '65x71>',
    square: '200x200#',
    medium: '300x300>'
  }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

end
