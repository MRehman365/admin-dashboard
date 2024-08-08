import React from 'react'
import { GrUpdate } from "react-icons/gr";

const LevelSetting = () => {
  return (
    <div>
      <div className="p-4 bg-[#343a40] rounded" style={{boxShadow:"0px 0px 10px #343a99"}}>
              <h2 className="text-2xl font-semibold text-white">Levels Setting</h2>
              <table className="min-w-full mt-4">
                <thead>
                  <tr className="bg-[#3f6791] text-white">
                    <th className="border border-border p-2">Levels</th>
                    <th className="border border-border p-2">F1</th>
                    <th className="border border-border p-2">F2</th>
                    <th className="border border-border p-2">F3</th>
                    <th className="border border-border p-2">F4</th>
                    <th className="border border-border p-2">Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border text-white p-2">0</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.06" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.06" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.06" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.06" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">1</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">2</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">3</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.75" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">4</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">5</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.5" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">6</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">7</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">8</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">9</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">10</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">11</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">12</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">13</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border text-white p-2">14</td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border p-2">
                      <input type="text" value="0.25" className="border border-border p-1" />
                    </td>
                    <td className="border border-border text-center p-2">
                      <button className="bg-green-500 text-white p-2 rounded"><GrUpdate /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default LevelSetting
