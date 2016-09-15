class JobsController < ApplicationController
  layout 'admin'
  before_action :authenticate_admin!

  def show
    @job = Job.find(params[:id])
  end

  def new
    @job = Job.new
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      redirect_to admins_jobs_path, notice: "Job Added Successfully"
    else
      flash.now[:alert] = 'Job was not added'
      render :new
    end
  end

  def edit
    @job = Job.find(params[:id])
  end

  def update
    @job = Job.find(params[:id])
    if @job.update(job_params)
      redirect_to admins_jobs_path, notice: "Job Updated Successfully"
    else
      flash.now[:alert] = 'Job was not updated'
      render :edit
    end
  end

  def destroy
    Job.find(params[:id]).destroy
    redirect_to admins_jobs_path
  end



  private
    def job_params
      params.require(:job).permit(
                                    :job_title, 
                                    :job_description, 
                                    :job_description_second, 
                                    :essentials_title,
                                    :essentials,
                                    :requirements,
                                    :qualities_title,
                                    :qualities
                                  )
    end
end
