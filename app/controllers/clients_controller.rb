class ClientsController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'
  def index
    @clients = Client.all
  end

  def show
  end

  def new
    @client = Client.new
  end

  def create
    @client = Client.new(client_params)

    if @client.save
      # send success header
      render json: { message: "success", fileID: @client.id }, :status => 200
    else
      #  you need to send an error header, otherwise Dropzone
      #  will not interpret the response as an error:
      render json: { error: @client.errors.full_messages.join(',')}, :status => 400
    end     
  end

  def edit
  end

  def update
  end

  def destroy
    @client = Client.find(params[:id]).destroy
    respond_to do |format|
      format.js
    end
  end

  private 
    def client_params
      params.require(:client).permit(:image)      
    end
end
