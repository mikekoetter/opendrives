module JobsHelper

	def title_format(string)
		array = string.split(' ')
		if array.size == 1 
			string
		else
			first_word = array.shift
			words_left = array.join(" ")
			content_tag(:h3, content_tag(:span, first_word, class: 'light')+ " " + words_left,  class: 'career-job-title')
		end
	end

	def to_array(string)
		array = string.split(';')
		array.map { |a| a.gsub(/\A\p{Space}*|\p{Space}*\z/, '').strip }.reject { |c| c.empty? }
	end

end
