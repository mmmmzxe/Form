import {
  Card,
  Input,
  Typography,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    unregister,
    register,
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const domain = watch("domain");

  // * Remove from FORM
  useEffect(() => {
    if (domain !== "others") {
      unregister("otherdomainname");
    }
  }, [domain, unregister]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen grid w-full place-items-center bg-gray-50">
      <Card color="transparent" shadow={true} className="p-7 w-[700px] bg-white">
        <Typography variant="h4" color="blue-gray">
         Project Management
        </Typography>
        
        <br />
        <form
          className="mb-4 w-[600px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="m-5 flex">
          <h3 className="m-1 w-[250px]">Project Name</h3>
            <Controller
              name="ProjectName"
              rules={{
                required: "Project Name is Required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  {...field}
                  label="Project Name"
                  error={Boolean(errors?.ProjectName?.message)}
                />
              )}
            />
            {errors?.ProjectName?.message && (
              <span className="error-text">{errors?.ProjectName?.message}</span>
            )}
          </div>
     
          <div className="m-5 flex">
          <h3 className="m-1 w-[250px]">Assigned to</h3>
            <Controller
              name="Assignedto"
              control={control}
              rules={{
                required: "Assigned is Required",
              }}
              render={({ field }) => (
                <Select
                  label="Er Merry Petision"
                  {...field}
                  error={Boolean(errors?.Assignedto?.message)}
                >
                  <Option value="designer">Designer</Option>
                  <Option value="dev">Developer</Option>
                  <Option value="tester">Tester</Option>
                  <Option value="others">Others</Option>
                </Select>
              )}
            />
            {errors?.Assignedto?.message && (
              <span className="error-text">{errors?.Assignedto?.message}</span>
            )}
          </div>
          {domain === "others" && (
            <div className="m-5">
              <Controller
                name="otherdomainname"
                control={control}
                rules={{
                  required: "Domain Name is Required",
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="lg"
                    label="Type Here"
                    error={Boolean(errors?.otherdomainname?.message)}
                  />
                )}
              />
              {errors?.otherdomainname?.message && (
                <span className="error-text">
                  {errors?.otherdomainname?.message}
                </span>
              )}
            </div>
          )}
          <div className="m-5 flex">
          <h3 className="m-1 w-[250px]">Start Date</h3>
            <Controller
              name="Sdate"
              control={control}
              rules={{
                required: "Start Date is Required",
               
              }}
              render={({ field }) => (
                <Input
                  type="date"
                  {...field}
                  size="lg"
                  label="Start Date"
                  error={Boolean(errors?.Sdate?.message)}
                />
              )}
            />
            {errors?.Sdate?.message && (
              <span className="error-text">{errors?.Sdate?.message}</span>
            )}
          </div>
          <div className="m-5 flex">
          <h3 className="m-1 w-[250px]">end Date</h3>
            <Controller
              name="date"
              control={control}
              rules={{
                required: "End Date is Required",
               
              }}
              render={({ field }) => (
                <Input
                  type="date"
                  {...field}
                  size="lg"
                  label="End Date"
                  error={Boolean(errors?.date?.message)}
                />
              )}
            />
            {errors?.date?.message && (
              <span className="error-text">{errors?.date?.message}</span>
            )}
          </div>




          

          <div className="grid grid-cols-3 w-full ">
                <div className="m-5">
                  <div className="">
                    <p>Priority</p>
                  </div>
                </div>
                <div className=" col-span-2 flex space-x-8">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="High"
                      {...register("tradeType", {
                        required: "Priority type is required",
                      })}
                    />
                    <p>High</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Average"
                      {...register("tradeType", {
                        required: "Priority type is required",
                      })}
                    />
                    <p>Average</p>
                  </div>
                   <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Low"
                      {...register("tradeType", {
                        required: "Priority type is required",
                      })}
                    />
                    <p>Low</p>
                  </div>
              
                </div>
                <div className="w-full">
              {errors.tradeType && (
                        <span className="text-red-400 text-sm">
                          {errors.tradeType.message}
                        </span>
                      )}
              </div>
              </div>
              <div className="m-5 flex">
              <h3 className="m-1 w-[250px]">Descriotion</h3>
            <Controller
              name="Descriotion"
              rules={{
                required: "Descriotion is Required",
                minLength: {
                  value: 3,
                  message: "Minimum 30 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <textarea
                className="border-2 border-gray-300 rounded-lg w-full"
                type="text"
                  size="lg"
                  {...field}
                  label="Descriotion"
                  error={Boolean(errors?.Descriotion?.message)}
                />
              )}
            />
            {errors?.Descriotion?.message && (
              <span className="error-text">{errors?.Descriotion?.message}</span>
            )}
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-3 m-5">
            <Button type="reset" variant="outlined" onClick={() => reset()}>
              Clear
            </Button>
            <Button type="submit">Sumbmit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default App;
