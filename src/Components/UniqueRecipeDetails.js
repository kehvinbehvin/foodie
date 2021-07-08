import React, { useContext, useEffect } from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import { dataContext } from "../App";
import fetcher from "../API/fetcher";
import Button from "react-bootstrap/Button";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  PolarSeries,
  LineSeries,
  RadarSeries,
  Category,
} from "@syncfusion/ej2-react-charts";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";

const UniqueRecipeDetails = () => {
  const { id } = useParams();
  const { url } = useRouteMatch();
  const urlArray = url.split("/");
  urlArray.splice(-1);
  const prevURL = urlArray.join("/");
  const data = useContext(dataContext);
  const dispatch = data.pageStates[1];
  const dataDisplay = data.pageStates[0].uniqueRecipe;
  const dataDisplayJSX =
    dataDisplay.data.length === 3 ? (
      dataDisplay.data.map((element, index) => {
        console.log(dataDisplay.data);
        if (index === 0) {
          const imagesrc = element.image;
          const title = element.title;
          const summary = element.summary;
          return (
            <div className="recipe-unique-information">
              <div className="recipe-unique-summary-left">
                <img src={imagesrc} id="recipe-unique-image-id"></img>
              </div>

              <div className="recipe-unique-summary-right">
                <h1 id="recipe-unique-header-id">{title}</h1>
                <br />
                <span
                  dangerouslySetInnerHTML={{ __html: summary }}
                  id="recipe-unique-para-id"
                ></span>
              </div>
            </div>
          );
        } else if (index === 1) {
          const elementKeys = Object.keys(element);
          const data = elementKeys.map((key) => {
            return { taste: key, value: element[`${key}`] };
          });
          console.log(data);
          return (
            <ChartComponent primaryXAxis={{ valueType: "Category" }}>
              <Inject services={[RadarSeries, LineSeries, Category]} />
              <SeriesCollectionDirective>
                <SeriesDirective
                  type="Radar"
                  name="taste"
                  drawType="Line"
                  dataSource={data}
                  xName="taste"
                  yName="value"
                ></SeriesDirective>
              </SeriesCollectionDirective>
            </ChartComponent>
          );
        } else if (index === 2) {
          const ingredientArray = element.ingredients;
          const data = ingredientArray.map((element) => {
            return { name: element.name, value: element.price };
          });
          console.log(data);
          const labelContent = (e) => `${e.category}: \n ${e.value}%`;
          const donutCenterRenderer = () => (
            <span>
              <p>Total Cost: ${element.totalCost}</p>
            </span>
          );
          return (
            <Chart donutCenterRender={donutCenterRenderer}>
              <ChartSeries>
                <ChartSeriesItem
                  type="donut"
                  data={data}
                  categoryField="name"
                  field="value"
                >
                  <ChartSeriesLabels
                    background="none"
                    content={labelContent}
                    position="outsideEnd"
                  />
                </ChartSeriesItem>
              </ChartSeries>
              <ChartLegend visible={false} />
            </Chart>
          );
        }
        return null;
      })
    ) : (
      <div>...</div>
    );

  useEffect(() => {
    const uploadData = async () => {
      dispatch({ type: "UPDATERECIPEID", payload: id });
      const responseDataInformation = await fetcher("INFORMATION", {
        recipeId: id,
      });
      dispatch({
        type: "UPDATEUNIQUERESULTSDATA",
        payload: responseDataInformation,
      });
      const responseDataTaste = await fetcher("TASTEJSON", { recipeId: id });
      dispatch({ type: "APPENDDATATOUNIQUEPAGE", payload: responseDataTaste });
      const responseDataPrice = await fetcher("PRICE", { recipeId: id });
      dispatch({ type: "APPENDDATATOUNIQUEPAGE", payload: responseDataPrice });
    };
    uploadData();
  }, [id, dispatch]);
  return (
    <div className="recipe-unique">
      <br />
      {dataDisplayJSX[0]}
      <div className="recipe-unique-Widgetcontainer">
        <div className="recipe-unique-tasteWidget">{dataDisplayJSX[1]}</div>
        <div className="recipe-unique-priceWidget">{dataDisplayJSX[2]}</div>
      </div>

      <div className="recipe-unique-buttons">
        <Link to={`${url}/requirements`}>
          <Button variant="primary">Requirements</Button>
        </Link>{" "}
        <Link to={`${url}/instructions`}>
          <Button variant="primary">Instructions</Button>
        </Link>{" "}
        <Link to={`${prevURL}`}>
          <Button variant="primary">back to results</Button>
        </Link>
      </div>
    </div>
  );
};

export default UniqueRecipeDetails;
