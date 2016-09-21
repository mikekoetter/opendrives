class Client < ActiveRecord::Base
	has_attached_file :image, styles: {
    thumb: '100x100>',
    square: '400x400#',
    medium: '400x400>'
  }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
