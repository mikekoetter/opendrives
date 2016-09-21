module PartnersHelper
	def column(num)
		if num % 5 == 0
			15
		elsif num % 3 == 0
			4
		else 
			3
		end
	end
end
